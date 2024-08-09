def battleship(grid: list[list[int]], line: int, column: int) -> bool:
    grid_line = grid[line][column]
    if grid_line:
        return True
    return False


ships_grid = [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
]

print(battleship(ships_grid, 0, 4))
