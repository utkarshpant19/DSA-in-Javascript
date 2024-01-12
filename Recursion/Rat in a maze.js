const ratInAMaze = (maze)=>{

    let ans = [];
    let visited = new Array(maze.length);

    for(let i=0; i<visited.length; i++){
        visited[i] = new Array(visited.length).fill(false);
    }

    visited[0][0] = true;
    getMazePaths(0, 0, "", maze, visited, ans);
    console.log(ans);

}

const getMazePaths = (i, j, move, maze, visited, ans)=>{

    if(i == maze.length -1 && j == maze[0].length -1){
        // We've reached the destination
        ans.push(move);
        return;
    }

    // We can go either Down, Left, Right, or Up

    // Downward, i++
    if(i< maze.length -1 && !visited[i+1][j] && maze[i+1][j] == 1){
        // Mark cell as visited and go to that cell
        visited[i+1][j] = true;
        getMazePaths(i+1, j, move+"D", maze, visited, ans);
        visited[i+1][j] = false;
    }



    // Left, j--
    if(j> 0 && !visited[i][j-1] && maze[i][j-1] == 1 ){

        visited[i][j-1] = true;
        getMazePaths(i, j-1, move+"L", maze,  visited, ans);
        visited[i][j-1] = false;
    }

    // Right, j++

    if(j< maze[0].length -1 && !visited[i][j+1] && maze[i][j+1] == 1 ){

    visited[i][j+1] = true;
    getMazePaths(i, j+1, move+"R", maze,  visited, ans);
    visited[i][j+1] = false;
        }

    // Up, i--
    if(i> 0 && !visited[i-1][j] && maze[i-1][j] == 1){
        // Mark cell as visited and go to that cell
        visited[i-1][j] = true;
        getMazePaths(i-1, j, move+"U", maze,  visited, ans);
        visited[i-1][j] = false;
    }

}



let maze = [
    [0, 1, 1, 1],
    [1 ,1, 1, 0], 
    [1, 0, 1, 1],
    [0, 0, 1, 1]
]

ratInAMaze(maze);
