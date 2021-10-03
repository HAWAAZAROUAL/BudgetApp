import React,{Component} from 'react';
import { getincomeByMonth } from '../../helpers/selectors';
import {CanvasJSChart} from 'canvasjs-react-charts'

 

export default class IncomeReport extends Component {

	eachMonth = () => {
		const monthIncome=getincomeByMonth(this.props.incomes,this.props.month,this.props.userId);
		return Object.keys(monthIncome).map((k)=>{ 
		  return {name:`${k}`,y:`${monthIncome[k]}`}	;
		});
	  };
	render()  {
		const options = {
			animationEnabled: true,
			title: {
				text:  `${new Date().toLocaleString('default', { month: 'long' })} Income`
			},
			subtitles: [{
				text:  '',
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###''",
				dataPoints: this.eachMonth()
			}]
        }
		return (
		<div>
			<CanvasJSChart options = {options}	 
			/>	  
		</div>
         );
   }
}
   