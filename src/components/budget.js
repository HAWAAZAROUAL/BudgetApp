import CreateBudget from './CreateBudget'
export default function budget(props) {
    const budget={
        
    };
      function save(){
      props.CreateBudget(props.userId,buget)
      }

    return (
     
      <div className="App">
       
       <CreateBudget onSave={save}/>
        
      </div>
    );
  };