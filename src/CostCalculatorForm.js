import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useState } from 'react'

// Create state to handle form:
function CostCalculatorForm() {
    const [formData, setFormData] = useState({
        squareFeet: "",
        electricity: "",
        heat: "",
        water: "",
        gas: "",
        insurance: "",
        waste: "",
        internet: "",
        landscaping: "",
        cleaning: "",
        maintenance: "",
        otherExpenses: ""
    })

    // Destruction state of FormData:
    const { squareFeet, electricity, heat, water, gas, insurance, waste, internet, landscaping, cleaning, maintenance, otherExpenses } = formData

    //! Handle form changes
    const handleChange = (e) => {
        setFormData({...formData, 
        [e.target.name]:parseInt(e.target.value),
        })
    }

    const handleSubmit = () => {
        //Create new team object that pull information from formData
        // const newRouteObj = {
        //     squareFeet: squareFeet,
        //     electricity: electricity,
        //     heat: "",
        //     water: "",
        //     gas: "",
        //     insurance: "",
        //     waste: "",
        //     internet: "",
        //     landscaping: "",
        //     cleaning: "",
        //     maintenance: "",
        //     otherExpenses: ""
        // }
        const total_monthly_cost = (electricity+heat+water+gas+insurance+waste+internet+landscaping+cleaning+maintenance+otherExpenses)
        console.log(total_monthly_cost)
    }


return (
    <div className='updateRouteForm'>
    <Form  >
        <Form.Field>
            <label>Square Feet</label>
            <input type='number' placeholder="input total square footage" name="squareFeet" value={squareFeet} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
            <label>Electricity</label>
            <input type='number'  placeholder="input monthly cost" name="electricity" value={electricity} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
            <label>Heat</label>
            <input type='number' placeholder="input monthly cost" name="heat" value={heat} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
            <label>Water</label>
            <input type='number' placeholder="input monthly cost" name="water" value={water} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
            <label>Gas</label>
            <input type='number'  placeholder="input monthly cost" name="gas" value={gas} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
            <label>Insurance</label>
            <input type='number'  placeholder="input monthly cost" name="insurance" value={insurance} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
            <label>Waste</label>
            <input  type='number' placeholder="input monthly cost" name="waste" value={waste} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
            <label>Internet</label>
            <input type='number' placeholder="input monthly cost" name="internet" value={internet} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
            <label>Landscaping</label>
            <input type='number'  placeholder="input monthly cost" name="landscaping" value={landscaping} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
            <label>Cleaning</label>
            <input type='number'  placeholder="input monthly cost" name="cleaning" value={cleaning} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
            <label>Maintenance</label>
            <input  type='number' placeholder="input monthly cost" name="maintenance" value={maintenance} onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
            <label>Other Expenses</label>
            <input type='number' placeholder="input monthly cost" name="otherExpenses" value={otherExpenses} onChange={handleChange}/>
        </Form.Field>
        <br></br>
        <div style={{justifyContent:"center", display:"flex"}} >
            <Button.Group>
                <Button type='submit' onClick={handleSubmit} positive>Confirm Update</Button>
            </Button.Group>
        </div>

    </Form>
</div>
)
}


export default CostCalculatorForm;