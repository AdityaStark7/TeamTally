import { useState, useEffect } from 'react'
import "../css/submission.css";
import { useParams } from 'react-router-dom'

import { getSubmissions } from "../db"

import SubmissionCard from "../components/SubmissionCard";

import {Chart as ChartJS, BarElement, LinearScale, CategoryScale} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function Submissions(){
    const [loading, setLoading] = useState(true)
    const [msg, setMsg] = useState('')
    const [submissions, setSubmissions] = useState([])
    const [questions, setQuestions] = useState(0);
    const [newdata, setNewdata] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        if(!localStorage.getItem('gfc-user')) return
        const fetchData = async () => {
            try{
                let sbmns = await getSubmissions({ formID: id })
                setSubmissions(sbmns)
                console.log(submissions);
                setLoading(false)
            }catch(e){
                setLoading(false)
                setMsg(e.message)
            }
        }
        fetchData();
    }, [id])
    
    ChartJS.register(
        BarElement,
        LinearScale,
        CategoryScale
    )
    let data1 = {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
            label: '# of Votes',
            data: [2, 0, 1, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    }
    let data2 = {
        labels: ['A', 'B', 'C', 'D'],
        datasets: [{
            label: '# of Votes',
            data: [1, 1, 1, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    }
    let options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            lables: {
                fontSize: 26
            }
        }
    }
    return (
    
        <div>
            <h1 className="heading mb-1">Form Submissions</h1>
            { loading ? <p className="text-center mt-1"><span className="spinner"></span></p>
            : msg ? <h3 className="msg mt-1">{msg}</h3>
            : submissions.length > 0 ? (
                <div>
                <div>Number of submissions : {submissions.length}</div>
                <div className="cards-container submissions">
                <div className='bar-graph'>
                    Question 1
                    <Bar 
                        data = {data1}
                        height = {10}
                        options = {options}
                    />
                    </div>
                    Question 2
                    <div className='bar-graph'>
                    <Bar 

                        data = {data2}
                        height = {10}
                        options = {options}
                    />
                    </div>
                    {/* {submissions[0].submission.map((sub, index)=>{
                        if(index === 0){
                            return null;
                        }
                        {setNewdata(temp_data[index-1])}
                        return <div className='bar-graph'>
                            <Bar 
                                data = {data}
                                height = {10}
                                options = {options}
                            />
                        </div>
                    })} */}
                    {/* { submissions.map((subm, index) => <SubmissionCard key={index} submission={subm.submission}/> )} */}
                </div>
                </div>
            ) : <h3 className="msg mt-1">No submissions yet</h3>}
        </div>
    )
}

export default Submissions
