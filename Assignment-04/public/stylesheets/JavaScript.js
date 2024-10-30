let comments = [];

document.getElementById("postButton").addEventListener("click", function () {
    const handle = document.getElementById("handle").value;
    const comment = document.getElementById("comment").value;


    if (handle.toLowerCase() === "hacker") {
        alert("Warning !Invalid handle! ");
        return;
    }

    const commentObj = { handle, comment };

    comments.push(commentObj);

    document.getElementById("commentForm").reset();

    displayComments();

})


function displayComments() {
    const commentHistory = document.getElementById("commentHistory");
    commentHistory.innerHTML = ""; // Clear previous comments

    // Loop through comments array and add each comment to the display
    for (const comment of comments) {
        const commentBox = document.createElement("div");
        commentBox.classList.add("comment-box");

        commentBox.innerHTML = `
            <strong>${comment.handle}</strong>
            <p>${comment.comment}</p>
        `;

        commentHistory.appendChild(commentBox);
    }
}

