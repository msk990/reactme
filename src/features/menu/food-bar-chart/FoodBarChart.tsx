import 'chart.js/auto';
import { Bar } from "react-chartjs-2";

export const FoodBarChart = () => {
    const proteins = 350
    const pureCarbs = 700
    const sugars = 100
    const fiber = 50
    const pureFat = 200
    const saturated = 20

    const actualColor = 'rgb(75, 192, 192)'
    const idealColor = 'rgb(54, 162, 235)'
    const borderColor1 = 'rgb(75, 192, 192)'
    const borderColor2 = 'rgb(54, 162, 235)'

    const totalCarbs = pureCarbs + sugars
    const totalFat = pureFat + saturated

    const idealProteins = 500
    const idealPureCarbs = 600
    const idealSugars = 50
    const idealFiber = 20
    const idealPureFat = 100
    const idealSaturated = 20

    const idealTotalCarbs = idealPureCarbs + idealSugars
    const idealTotalFat = idealPureFat + idealSaturated

    const totalCalories = proteins + pureCarbs + sugars + fiber + pureFat + saturated
    const idealTotalCalories = idealProteins + idealPureCarbs + idealSugars + idealFiber + idealPureFat + idealSaturated
   
    const barChartData = {
        labels: [
          "Proteins",
          "Carbs",
          "Fat",
          "Total"
         
        ],
        datasets: [
            
          {
            axis: 'y',
            label: "actual",
            backgroundColor: actualColor,
            borderColor: borderColor1,
            borderWidth: 1,
            data: [proteins, totalCarbs, totalFat, totalCalories]
          },
          {
            axis: 'y',
            label: "ideal",
            backgroundColor: idealColor,
            borderColor: borderColor2,
            borderWidth: 1,
            data: [idealProteins, idealTotalCarbs, idealTotalFat, idealTotalCalories]
          },
       
        ]
      };
      
      var chartOptions = {
        indexAxis: 'y' as const,
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
          text: "Chart.js Bar Chart"
        },
    }
        // scales: {
        //   yAxes: [{
        //     ticks: {
        //       beginAtZero: true
        //     }
        //   }]
        // }
      }

    return(

        <>
        <Bar data={barChartData} options={chartOptions} />
        </>
    )
}