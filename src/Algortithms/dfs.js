function dfs(startNode,endNode){
    let s = [];
    let visitedNodes = [];
    let path = [];
    s.push(startNode);
    //mark as visited
    visitedNodes.push(startNode);

    while(s.length !== 0)
    {
        let u = s.pop();
        let n = u.neighbours;
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

        for(let i=0;i<n.length;i++)
        {
            if(!visitedNodes.includes(n[i]) && !n[i].isWall)
            {
                n[i].previous = u;
                visitedNodes.push(n[i]);
                s.push(n[i]);
            }
            

        }
    }


}

export default dfs;