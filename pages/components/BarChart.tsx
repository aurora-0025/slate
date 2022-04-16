import React from 'react'
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
import { Bar } from 'react-chartjs-2'

const controllers:any = Object.values(Chartjs).filter(
  (chart:any) => chart.id !== undefined
);

Chart.register(...controllers);

function BarChart({userData}) {
  return (
    <div>
        <Bar data={{
            labels: ['Physics', 'Maths', 'Chemistry', 'Biology'],
            datasets: [
            {
                label: "marks",
                data: [userData.quiz.physics.marks, userData.quiz.maths.marks, userData.quiz.chemistry.marks, userData.quiz.biology.marks],
                backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
              ],
            },],
        }}
        />
    </div>
  )
}


export default BarChart;