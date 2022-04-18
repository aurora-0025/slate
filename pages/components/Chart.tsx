import React from 'react'
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";
import { Bar, Doughnut } from 'react-chartjs-2'
import { Router, useRouter } from 'next/router';

const controllers:any = Object.values(Chartjs).filter(
  (chart:any) => chart.id !== undefined
);

Chart.register(...controllers);

export function BarChart({userData}) {
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
export function DonutChart({quizData}) {
  const router = useRouter()
  const redirectTo = (path) => {
    router.push(path)
  }
  return (
    <div>
        <Doughnut data={{
            labels: [quizData.course1.name, quizData.course2.name, "Incorrect"],
            datasets: [
            {
                label: "marks",
                data: [quizData.course1.marks, quizData.course2.marks, (10-(quizData.course2.marks+quizData.course1.marks))],
                backgroundColor: [
                  'rgba(252, 255, 106, 1)',
                  'rgba(40, 208, 231, 1)',
                  'rgba(255, 106, 106, 1)',
              ],
            },],
        }}
        options = {{
          onClick: function(evt, element) {
            if(element.length > 0)
            {
              element.map((el)=> {
                if(el.index == 2) return;
                let courseLink = quizData[`course${el.index + 1}`].name.toLowerCase().split(' ').join('_');
                let subjectLink = quizData.name;
                redirectTo(`/${subjectLink}/${courseLink}`)
              }
            );
            }
          },
        }}
        />
    </div>
  )
}


export default BarChart;