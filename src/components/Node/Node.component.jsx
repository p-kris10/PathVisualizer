import './Node.styles.css'
const Node = ({Change,isStart,isEnd,row,col,isWall,start,end}) => {
    const classes = isStart? "node-start" :isWall?"iswall": isEnd?"node-end":"";
    const startEnd = (start || end)?"set":"";
    //console.log("run");
    return ( 
        <div onClick={Change} className={`node ${classes} ${startEnd}`}  id={`node-${row}-${col}`}></div>
     );
}
 
export default Node;