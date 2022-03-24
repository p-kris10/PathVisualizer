import { useState } from "react";
import { useEffect } from "react";
import Grids from "../GridN/gridn.components";
import Astar from "../../Algortithms/astar";
import './Pathfind.styles.css';
import { Button } from "react-bootstrap";
import bfs from "../../Algortithms/bfs";
import dfs from "../../Algortithms/dfs";
const rows = 15;
const cols = 25;

const PathFind = ({algo}) =>{
    const [Grid,setGrid] = useState([]);
    const [path,setPath] = useState([]);
    const [visitedNodes,setVisitedNotes] = useState([]);
    //start and end
    const [start,setStart] = useState(false);
    const [end,setEnd] = useState(false);
    const [startRow,setStartRow] = useState(0);
    const [startCol,setStartCol] = useState(0);
    const [EndRow,setEndRow] = useState(rows-1);
    const [EndCol,setEndCol] = useState(cols-1);
    
    useEffect(() => {
        initializeGrid();
        console.log(algo);
    }, [startRow,startCol,EndCol,EndRow,algo]);

    const initializeGrid = () =>{
        const grid = new Array(rows);

        for(let i=0;i<rows;i++)
        {
            grid[i] = new Array(cols);
        }
        createSpot(grid,1);

        setGrid(grid);
        addNeighbour(grid);

        const startNode = grid[startRow][startCol];
        const endNode = grid[EndRow][EndCol];
        startNode.isWall = false;
        endNode.isWall = false;
        setGrid(grid);
        let path = Astar(startNode,endNode);
        if(algo === 'BFS')
        {
           
            path = bfs(startNode,endNode);
        }
        else if(algo === "DFS")
        {
            
            path = dfs(startNode,endNode);
        }
        setPath(path.path);
        setVisitedNotes(path.visitedNodes);
    };
    //creates spot
    const createSpot =(grid,show)=>{
        for(let i=0;i<rows;i++)
        {
            for(let j=0;j<cols;j++)
            {
                grid[i][j] = new Spot(i,j,show);
            }
        }
    };

    //add neighbour
    const addNeighbour =(grid)=>{
        for(let i= 0;i<rows;i++)
        {
            for(let j=0;j<cols;j++)
            {
                grid[i][j].addneighbours(grid);
            }
        }
    }
    //Spot Constructor
    function Spot(i,j,show)
    {
        this.x = i;
        this.y = j;
        this.isStart = this.x === startRow && this.y === startCol;
        this.isEnd = this.x === EndRow && this.y === EndCol;
        this.g = 0;
        this.f = 0;
        this.isWall = false;
        if(Math.random(1)<0.2 && show){
            this.isWall = true;
        }
        this.h = 0;
        this.d = Infinity;
        if(this.x === startRow && this.y === startCol){
            this.d = 1;
        }
        this.neighbours=[];
        this.previous = undefined;
        this.addneighbours = function(grid)
        {
            let i = this.x;
            let j = this.y;
            if(i>0)this.neighbours.push(grid[i-1][j]);
            if(i<rows-1) this.neighbours.push(grid[i+1][j]);
            if(j>0) this.neighbours.push(grid[i][j-1]);
            if(j<cols-1) this.neighbours.push(grid[i][j+1]);
        };

    }
    // console.log(Grid);

    //grid with node
    const Change =(e)=>{
        console.log("this ran");
        const [row ,col]= e.target.id.substr(5,9).split("-");
        if(start)
        {
            setStartRow(parseInt(row));
            setStartCol(parseInt(col));
            console.log(parseInt(row));
            console.log(parseInt(col));
        }
        else if(end)
        {
            setEndRow(parseInt(row));
            setEndCol(parseInt(col));
        }
        setEnd(false);
        setStart(false);
        
        
    }
    
    const visualizeShortestPath = (shortestPathNodes) =>{

        for(let i =0;i<shortestPathNodes.length;i++)
        {
            setTimeout(() => {
                const node = shortestPathNodes[i];
                document.getElementById(`node-${node.x}-${node.y}`).className="node node-shortest-path";
            }, 10*i);
        }

    }
    const visualizePath = ()=>{
        for(let i =0;i<=visitedNodes.length;i++)
        {
            if(i === visitedNodes.length)
            {
                setTimeout(() => {
                    visualizeShortestPath(path);
                }, 20*i);
            }
            else{
                setTimeout(() => {
                    const node = visitedNodes[i];
                    document.getElementById(`node-${node.x}-${node.y}`).className="node node-visited";
                  
                }, 20*i);
              
            
            }
        };
    }
    const startSet =()=>{
        setStart(!start);
        if(start){
            setEnd(false);
        }
    }
    const endSet =()=>{
        setEnd(!end);
        if(end){
            setStart(false);
        }
    }
    
    return(
        <div className="Wrapper"> 
        <h1>{algo} Alogrithm</h1>
        <div className="buttons">
            <Button variant="dark" onClick={visualizePath}>Visualize Path</Button>
            <Button onClick={startSet} variant="dark">Set Start</Button>
            <Button onClick={endSet} variant="dark">Set End</Button>
        </div>
        <div className='main'>
            <Grids Grid={Grid} Change={Change} start={start} end={end}/>
        </div>
            
        </div>
    );
}

export default PathFind;