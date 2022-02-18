import React, {useState} from 'react'

function About () {

const[myStyle, setMyStyle] = useState({
    color:'black',
    backgroundColor:"white",
})

const[text, setText] = useState('Dark Mode')

const toggleMode = ()=>{
    if(myStyle.color === 'black'){
        setMyStyle({
            color:'white',
            backgroundColor:'black',
            border: '1px solid white'
        })
       setText('Light Mode')
    } else{
        setMyStyle({
            color:'black',
            backgroundColor:'white',
        })
        setText('Dark Mode')
    }
}

    return <>
    <div className='container'>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item" >
        <h2 className="accordion-header" id="headingOne" >
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            Accordion Item
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
    <button className='btn btn-primary my-2' onClick={toggleMode}>{text}</button>
    </div>
 </>
}

export default About