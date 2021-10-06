export default function ShowSummary(props){
    return (
        <div className="my-budgets-summary">
            <p> Balance Tracker</p>
            <div className="my-budgets-table-summary">

            <table> 
                <tr>
                    <th>
                        Total Income
                    
                        
                    </th>
                    <th>
                       Total Expenses 
                    
                        
                    </th>
                    <th>
                       Balance 
                    
                        
                    </th>
                </tr>
                <tr>
                    <td>
                       ${props.totalIncome} 
                    </td>
                    <td>
                       ${props.totalExpense} 
                    </td>
                    <td>
                    ${props.balance} 
                    </td>
                </tr>
            </table>
            </div>
         
        </div>
       
    );
}