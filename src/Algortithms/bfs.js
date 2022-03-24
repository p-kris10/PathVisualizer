function bfs(startNode,endNode){
    let path = [];
    let closedSet = [];
    let visitedNodes = [];
    let nodes=[];
    nodes.push(startNode);
    while(nodes.length !== 0)
    {
        let u =nodes[0];
        for(let i=0;i<nodes.length;i++)
        {
            if(nodes[i].d<u.d)
            {
                u = nodes[i];
            }
        }
        visitedNodes.push(u);
        closedSet.push(u);
        nodes = nodes.filter((el)=> el!== u);

        let neighbours = u.neighbours;
        for(let i=0;i< neighbours.length;i++)
        {
           
            let neighbour = neighbours[i];
            if(!closedSet.includes(neighbour) && !neighbour.isWall)
            {
                
                let alt = u.d + 1;
                if(alt<neighbour.d)
                {
                    neighbour.d = alt;
                    neighbour.previous = u;
                    nodes.push(neighbour);
                }      
            }
        }
        if(u === endNode)
        {
            let temp = u;
            path.push(temp);
            while(temp.previous){
                path.push(temp.previous);
                temp = temp.previous;
            }
         
            return {path,visitedNodes};
            
        }

    }

    
return { path,visitedNodes ,error:"No path found"};

    

}

export default bfs;