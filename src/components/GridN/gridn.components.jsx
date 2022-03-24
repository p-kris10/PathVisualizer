import Node from "../Node/Node.component";
import './gridn.styles.css'
const Grids = ({Grid,Change,start,end}) => {
    
    return (
    <div className="grid">
        {Grid.map((row,rowIndex)=>{
            return(
                <div key={rowIndex} className='rowWrapper'>
                    {row.map((col,colIndex)=>{
                        const{isStart,isEnd,isWall} = col;
                        return <Node Change={Change} key={colIndex} start={start} end={end} isStart={isStart} isEnd={isEnd} row={rowIndex} col={colIndex} isWall={isWall}/>
                    }
                    )}
                </div>
            )
        })}
    </div>  );
}
 
export default Grids;