// Get the #VerticalScroll and #megaSVG elements
const verticalScroll = document.getElementById('VerticalScroll');
const megaSVG = document.getElementById('megaSVG');

// Add a scroll event listener to the #VerticalScroll element
verticalScroll.addEventListener('scroll', () => {
    // Calculate the horizontal scroll position based on the vertical scroll position
    const horizontalScrollPosition = (verticalScroll.scrollTop / (verticalScroll.scrollHeight - verticalScroll.clientHeight)) * (megaSVG.scrollWidth - megaSVG.clientWidth);

    // Set the horizontal scroll position on the #megaSVG element
    megaSVG.scrollLeft = horizontalScrollPosition;
});

questa è una prova

  
