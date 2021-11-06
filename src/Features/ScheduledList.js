import React from 'react'
import Card from '../Components/Card'

const ScheduledList = () => {
    return (
        <Card styleName="card-shadow">
            <Card styleName="card-border card-bg-red content-wrapper">
                    <p>lalalla</p>
                    <div>
                        <button>
                            <i className="fas fa-edit" style={{marginRight: "30px"}}></i>
                        </button>
                        <button>
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </div>
            </Card>
        </Card>
    )
}

export default ScheduledList
