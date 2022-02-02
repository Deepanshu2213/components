import './App.css';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard'
const App=()=>{
  return (<div className="ui container comments">
   
   <CommentDetail author="Kashish" time="Today at 5:00pm" content="What the heck with comments"/>
   <CommentDetail author="Naman" time="Today at 6:00pm" content="Hello bro"/>
   <ApprovalCard>
   <CommentDetail author="Deepanshu" time="Today at 6:00pm" content="What to do"/>
   </ApprovalCard>
   <ApprovalCard>
     <div><h4>Warning?</h4></div>
     <p>Are you sure</p>
     <CommentDetail author="Deepanshu" time="Today at 4:00pm" content="What to do"/>
   </ApprovalCard>
  
</div>);
}
export default App;
