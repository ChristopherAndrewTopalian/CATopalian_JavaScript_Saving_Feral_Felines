// makeInterface.js

function makeInterface(whichArray)
{
    let mainDiv = ce("div");
    mainDiv.id = 'mainDiv';
    mainDiv.className = "mainDivClass";
    ba(mainDiv);

    //-//

    mainDiv.append(makeTitleOfApp());

    //-//

    let titleDiv = ce("div");
    titleDiv.className = "titleStyle";
    titleDiv.textContent = "Saving Feral Felines";
    mainDiv.append(titleDiv);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    let reportButton = ce("button");
    reportButton.className = "buttonFilterStyle";
    reportButton.textContent = "Report";
    reportButton.onmouseover = function()
    {
        hoverSound();
    };
    reportButton.onclick = function()
    {
        clickSound();
        reportTextArea(videoArray);
    };
    mainDiv.append(reportButton);

    //-//

    let downloadButton = ce("button");
    downloadButton.id = "jsonDownloadButton";
    downloadButton.className = "buttonFilterStyle";
    downloadButton.value = "download";
    downloadButton.title = "downloadFile(videoArray)";
    downloadButton.onmouseover = function()
    {
        hoverSound();
    };
    downloadButton.onclick = function()
    {
        clickSound();
        downloadFile();
    };
    downloadButton.textContent = "Download Records";
    mainDiv.append(downloadButton);

    //-//

    let hiddenAnchor = ce("a");
    hiddenAnchor.id = "downloadAnchorElem";
    hiddenAnchor.style.display = "none";
    mainDiv.append(hiddenAnchor);

    //-//

    mainDiv.append(ce('hr'));

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theUrl = whichArray[x].url;

        // copy everything after the = symbol
        let splitUrl = theUrl.split('=')[1];

        // add the youtube embed part
        let embedUrl = "https://www.youtube.com/embed/" + splitUrl;

        //-//

        let containerDiv = ce("div");
        mainDiv.append(containerDiv);

        //-//

        /*
        let theDate = ce("div");
        theDate.className = "descriptionStyle";
        theDate.textContent = whichArray[x].date;
        containerDiv.append(theDate);
        */

        //-//

        let theButton = ce("button");
        theButton.className = "buttonStyle";
        theButton.onmouseover = function()
        {
            hoverSound();
        };
        theButton.onclick = function()
        {
            clickSound();

            window.open(whichArray[x].url, "", "width = 1000, height = 800");
        };
        theButton.textContent = whichArray[x].name;
        containerDiv.append(theButton);

        //-//

        containerDiv.append(ce('br'));

        //-//

        let onlineURL = ce("a");
        onlineURL.className = "descriptionStyle";
        onlineURL.target = "_blank'";
        onlineURL.href = whichArray[x].url;
        onlineURL.textContent = whichArray[x].url;
        containerDiv.append(onlineURL);

        //-//

        let theIframe = ce("iframe");
        theIframe.src = embedUrl;
        theIframe.style.width = 400 + "px";
        theIframe.style.height = 200 + "px";
        containerDiv.append(theIframe);

        //-//

        let theHr = ce("hr");
        containerDiv.append(theHr);   
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

