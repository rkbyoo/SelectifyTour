import Card from './Card';


function Tours({tours,removeTour}){
    return(
        <div className='container'>
            <div>
                <h1 className='title'>Plan Your Tour</h1>
            </div>
            <div className='cards'>              
                {
//i mapped each and every object inside the array with the card element which will display the data of the tours in it with that i passed the copy of the object of single tour so that it can be accessed in the component of card as a prop  
                    tours.map( (tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card> 
                    })
                }
            </div>
        </div>

    );

    
}
export default Tours;