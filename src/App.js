
import './App.css';
import Family from './contextapi/Family'

import {FamilyContext} from './contextapi/FamilyContext';
const secret={
  familyName:"Will smith family",
  onlyForParent:function(){
      return " parents can see"
  },
  onlyForgrandChild:function(){
      return " grandchilds can see"
  }

}
function App() {
  return (
    <div className="App">
      <FamilyContext.Provider value={secret}>
      
      <Family/>
      </FamilyContext.Provider>
      
    </div>
  );
}

export default App;
