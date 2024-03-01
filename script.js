/*What to say, what to say...JavaScript is cool as heck, but it doesn't like me!
I finally found a reason to use NULL! That's been bugging me since week 2, so 
small happy dance! I tried to do a class thing here, I finally scrapped it because
nothing worked and it turned out easier to just create arrays. My head still can't 
wrap around a better way to do the winConditions. I tied in the table,then (I think) I 
set every possible win condition there could be. The rest...I've been piecing together
little by little to make it function. My original way did nothing, it was more a data
set. Couple websites and youtube tutorials later we got the condition of winConditions
figured out.*/

let currentPlayer = 'X';
    let cells = document.querySelectorAll('td');
    let winner = null;

    function checkWinner() {
      const winConditions = [
        ['cell1', 'cell2', 'cell3'],
        ['cell4', 'cell5', 'cell6'],
        ['cell7', 'cell8', 'cell9'],
        ['cell1', 'cell4', 'cell7'],
        ['cell2', 'cell5', 'cell8'],
        ['cell3', 'cell6', 'cell9'],
        ['cell1', 'cell5', 'cell9'],
        ['cell3', 'cell5', 'cell7']
      ];

      for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (document.getElementById(a).innerText === currentPlayer &&
            document.getElementById(b).innerText === currentPlayer &&
            document.getElementById(c).innerText === currentPlayer) {
          return true;
        }
      }
      return false;
    }

    function checkDraw() {
      for (let cell of cells) {
        if (cell.innerText === '') {
          return false;
        }
      }
      return true;
    }

/*Hardest part for me still is trying to understand how to switch between
Players. I found conditional (ternary) operator that works great, but I don't know how.
I thought I would have to create two players and set them to X and O. Nope. Easier for 
me, but I would love to know how the computer sees this and makes the "O" player! I wasted 
hours trying to essentially write this long hand. So the handleClick is a fun conglomerate
of about seven peoples tutilage...and to be honest, it still baffles me and I'm gonna have
to look it up again soon, because NONE of it stuck sadly.*/

    function handleClick(cell) {
      if (!cell.innerText && !winner) {
        cell.innerText = currentPlayer;
        if (checkWinner()) {
          winner = currentPlayer;
          $('#turn').text(`Player ${currentPlayer} wins!`);
        } else if (checkDraw()) {
          $('#turn').text('It\'s a draw!'); /*OH, OH...and this little gem. Talk about grammerly 
          frustration! Took me a bit to figure out how and why
          I had to adjust the "It's a draw". Stupid apostrophies anyhow...*/
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          $('#turn').text(`It's ${currentPlayer}'s turn`);
        }
      }
    }
/*This is what is left from trying to get my button created and then make it work. I seem to like to
overcomplicate things in an effort to "make things simpler". I wrote a version and then finally gave in
and ran it through ChatGPT to see if it could find errors for me. This is what it returned for the restart
portion. Makes sense once I can read it, but coming up with this in my head still isn't my natural way of
thinking. The button part...is it sad to have a point of pride in stumping an AI program? Cause even ChatGPT
couldn't figure out what the heck I was thinking! Gave me a rather hearty chuckle when I couldn't find an 
answer, but fixed it by complete mistake. */
    function restart() {
      cells.forEach(cell => cell.innerText = '');
      currentPlayer = 'X';
      winner = null;
      $('#turn').text(`It's ${currentPlayer}'s turn`);
    }
/*Ah yes, almost forgot about this little guy...I had originally put this way up top under currentPlayer. 
I had just set it as an event listener and was all proud it didn't have any red lines or flaw numbers on the 
page. Was very upset for a few hours when my mouse did NOTHING in the browser page. I found a youtube guy 
that had also made a tic tac toe game and I flat out stole this line of code, and also noted it was the last
thing he did. So I moved it down here to the bottom and boom...my mouse works in the browser. I really could
use about two weeks to just practice and mess around with this kind of stuff. My brain is so overwhelmed, I cannot 
for the life of me think of why this works when my version didn't. */
    cells.forEach(cell => cell.addEventListener('click', () => handleClick(cell)));