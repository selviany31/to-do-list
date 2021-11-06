import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Components/Card'
import { createTodoList, deleteToDoList } from '../Redux/Action'

const ScheduledList = () => {
    const dispatch = useDispatch()
    const {dataList} = useSelector((state) => state.listReducer)

    const [addData, setAddData] = useState({
        title: "",
        description: ""
    })

    const handle = (e) => {
        e.preventDefault()
        const body = {
            title: addData.title,
            description: addData.description,
            status: 0
        }
        dispatch(createTodoList(body))
    }

    // const handleDelete = (id) => {
    //     dispatch(deleteToDoList(id))
    // }

    console.log();
    return (
        <Card styleName="card-shadow">
            {dataList.filter((list) => list.status === 0).map((item, index) => (
                <Card key={index} styleName="card-border card-bg-red content-wrapper">
                        <p>{item?.title}</p>
                        <div>
                            <button>
                                <i className="fas fa-edit" style={{marginRight: "30px"}}></i>
                            </button>
                            <button>
                                <i className="far fa-trash-alt" ></i>
                            </button>
                        </div>
                </Card>
            ))}
            <form style={{margin: "30px 30px"}}>
                <div>
                    <label>Title</label><br />
                    <input type="text" onChange={(e) => setAddData({...addData, title: e.target.value})}/>
                </div>
                <div>
                    <label>Description</label><br />
                    <textarea type="text" onChange={(e) => setAddData({...addData, description: e.target.value})}/>
                </div>
                <button type="submit" onClick={handle} className="button-submit card-bg-blue">Submit</button>
            </form>
        </Card>
    )
}

export default ScheduledList
