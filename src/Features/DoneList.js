import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'

const DoneList = () => {
    const {dataList} = useSelector((state) => state.listReducer)

    return (
        <Card styleName="card-shadow">
            {dataList.filter((list) => list.status === 1).map((item, index) => (
                <Card key={index} styleName="card-border card-bg-blue content-wrapper">
                        <p>{item?.title}</p>
                        <div>
                            <button>
                                <i className="fas fa-edit"></i>
                            </button>
                        </div>
                </Card>
            ))}
        </Card>
    )
}

export default DoneList

