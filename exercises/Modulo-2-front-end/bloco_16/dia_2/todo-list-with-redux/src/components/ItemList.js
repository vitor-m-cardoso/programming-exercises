import { connect } from 'react-redux';
import * as Actions from '../actions';

function ItemList({ items, delTask }) {
  return (
    <div>
      <ol> Tarefas pendentes:
        {items.map((taskItem, index) => 
          <div style={{display: "flex"}}>
            <li key={index} onDoubleClick={() => delTask(taskItem)}>{taskItem}</li>
          </div>)}
      </ol>
    </div>
  )
}

const mapStateToProps = (state) => ({
  items: state.todoReducer.items,
  completedItems: state.todoReducer.completedItems
});

const mapDispatchToProps = (dispatch) => ({
  delTask: (remove) => dispatch(Actions.deleteTask(remove))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
