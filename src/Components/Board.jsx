import React, {Fragment}  from 'react';
import Square from './Square';
import calculateWinner from './CalculateWinner';
import swal from 'sweetalert';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })
    }

    sweetAlertFunction() {
        const winner = calculateWinner(this.state.squares);
        if (winner) {
            if (winner === "X"){
                swal("Good job Ninja Boy!", "You are the winner! Press OK to play again", "success")
                .then(() => window.location.reload())
            } else {
                swal("Good job Ninja Girl!", "You are the winner! Press OK to play again", "success")
                .then(() => window.location.reload())
            }
        } else {
            return null
        }
    }

    renderSquare(i) {
        return <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = "Winner is " + (winner === "X" ? "Ninja Boy" : "Ninja Girl");
        } else {
            status = 'Next Player: ' + (this.state.xIsNext ? "Ninja Boy" : "Ninja Girl")
        }

        return (
            <Fragment>
            <div>
                <div className="status">{status}</div>
                {this.sweetAlertFunction()}
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
            </Fragment>
        );
    }
}

export default Board;
