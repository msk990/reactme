import { Row, Col } from "react-bootstrap";
import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import { Calories } from "../../../interfaces/Calories"
export const FoodMainChart = () => {

   
      //  const noLegend = props.noLegend

      const proteins = 350
      const pureCarbs = 700
      const sugars = 100
      const fiber = 50
      const pureFat = 200
      const saturated = 20

const total = proteins + pureCarbs + sugars + fiber + pureFat + saturated

const CHART_COLORS = {
     red: 'rgb(255, 99, 132)',
     orange: 'rgb(255, 159, 64)',
     yellow: 'rgb(255, 205, 86)',
     green: 'rgb(75, 192, 192)',
     blue: 'rgb(54, 162, 235)',
     purple: 'rgb(153, 102, 255)',
     grey: 'rgb(201, 203, 207)'
   }
 const options = {
     maintainAspectRatio: true,
     cutout:120,
     responsive: true,
     plugins: {
       legend: {
         display: false,
         // position: "bottom" as const,
         // align: "start" as const,
         // labels: {
         //   padding: 10 
         // }
       },
       title: {
         display: false,
         text: "Chart.js Horizontal Bar Chart"
       }
     }
 }

  const foodGroups = {
     labels: ['Proteins', 'Carbs', 'Sugars', 'Dietary Fiber' ,'Fat', 'Saturated Fat'],
     datasets: [
       {
         label: 'all',
         data: [proteins, pureCarbs, sugars, fiber, pureFat, saturated],
         backgroundColor: [
           CHART_COLORS.blue,
           CHART_COLORS.green,
           CHART_COLORS.red,
           CHART_COLORS.purple,
           CHART_COLORS.yellow,
           CHART_COLORS.orange,
           
         ],
         borderColor: [
             CHART_COLORS.blue,
             CHART_COLORS.green,
             CHART_COLORS.red,
             CHART_COLORS.purple,
             CHART_COLORS.yellow,
             CHART_COLORS.orange,
           
         ],
         borderWidth: 1,
       },
     ],
   };

 return(
     <>
     

<div className="w-75 p-3 m-auto" style={{ position: 'relative'}}>
        <Doughnut data={foodGroups}  
        options={options}
        />  

<div style={{ position: 'absolute', width: '100%', top: '50%', left: 0, textAlign: 'center', marginTop: '-40px',  lineHeight: '20px'}}>
          <h2>{total} kcal</h2> 
         <h4>per day</h4> 
     </div>
     </div>


     

     
     </>
 )
      
}