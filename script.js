

// Sample data for table rows
const tableData = [
  { brand: 'Wix', description: 'Develop a personalized fit...', members: 2, categories: 'Automation', tags: '#DigitalTransformation', nextMeeting: 'In 30 minutes' },
  { brand: 'Shopify', description: 'Description for Google', members: 5, categories: 'Search, Technology', tags: '#Tech #Search', nextMeeting: 'Tomorrow' },
  { brand: 'MailChimp', description: 'Description for Apple', members: 10, categories: 'B2B', tags: '#Tech #Innovation', nextMeeting: 'Next week' },

  { brand: 'Paypal', description: 'Develop a personalized fit...', members: 2, categories: 'Automation', tags: '#DigitalTransformation', nextMeeting: 'In 6 hours' },
  { brand: 'Disney', description: 'Description for Google', members: 5, categories: 'Search, Technology', tags: '#Tech #Search', nextMeeting: 'Not connect' },
  { brand: 'Intercom', description: 'Description for Apple', members: 10, categories: 'Technology', tags: '#Tech #Innovation', nextMeeting: 'Next week' },

  { brand: 'Evernote', description: 'Develop a personalized fit...', members: 2, categories: 'Automation', tags: '#DigitalTransformation', nextMeeting: 'In 30 minutes' },
  { brand: 'Google', description: 'Description for Google', members: 5, categories: 'Search, Technology', tags: '#Tech #Search', nextMeeting: 'Tomorrow' },
  { brand: 'Microsoft', description: 'Description for Apple', members: 10, categories: 'B2B , Technology', tags: '#Tech #Innovation', nextMeeting: 'Not connect' },
  { brand: 'lnvision', description: 'Description for Apple', members: 10, categories: 'Technology', tags: '#Tech #Innovation', nextMeeting: 'Next week' },

];
 // all Brand Image and Use dynamic
const brandImages = {
  'Wix': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA0UlEQVR4AdzJIWjDQABA0a/n66GuXsRFzsRExnuYh6j4MhUXFTPviTioyHlOxJ+MjTj1R2hhbp5+9eHhP70T5uRfaTO4bKoeIROZ1OEyqDNxwG/G06AgF12Bh17xvhYrktasYsPuwEDvTu0Ph5kPZ74URxZvyNWF0ZpDRzooion+oLPj6Il+nmgNQUW5PpicCTd8YQNRRTtakomW9oUzLaic+zyYnriDE72iGzRqC9uJxZqoFVFUCGoAtcKJu7pDQY1Z1RzP312SqiVkfjdC0hAA06aUTjJjbowAAAAASUVORK5CYII=",
  'Shopify': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEX////1+PGuzoGawk+ixmPk7dX7/Pnx9uuQvCygxV2QvDrP4bX8/fybwlfp8d/s8+O404/K3qzC2Z7S47ve6sumyGqpyHra4taVv0eTvkGQukZIgyi+15iVv0hcjD5ViS5xmlhik07k6uKUv0dejj5JgxvK18WtzXeuwqSEtgq00ISOrnuKuR+PuzVfjkC50456oWhBgAi8zbSctosfcwAVHUP+AAABXElEQVR4AW3ShWLCMBAA0HahIYS6bBdWF7SC/f+3LckS/KD6aifGPcwvNLOw8THmxDIXhC4/me24BvJ8a+Z+wCA0wqURRHHy/fNq2LFxYs99oGz1+6pWasSIvzLLYJUXZVU/3pgmiDSQAQDHtu3WN4o3jApgrFFYbLWZO8aF0mS/nylsDxrdHrilpnjG8I9jqTEmACr5iUrkYesUB2AbUaM5dhqFnalwYjDEhpFSyk2jzjUBIB7fsEyn8pALyiSa+wFuqHPBNAMaiL2I3rA9ql71In9L7C6HTOFYqTQFNvJejDS2BZYYEQBGMyIy3TCNp1piSAE2S9YH8sP1Y1Uum0Z8j+mJKrP7Y88SF5mogYyUgsb2Is/IZgUmv89/SGWUuWCScaUEoUGaxlGg1/c9zWTAA7adzAXP4zBBpCeskRdwHMe8uD6MEXbjNIG+Hxo+YKfieNb2eEk0JQcNf/qmMR8K5c7QAAAAAElFTkSuQmCC',
  'MailChimp': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAjVBMVEX/4Bv/4hv/5Rv/5hv11xukjxiLeRfkyBr/6BuXhBhfURbKsRnu0RtZTBbDqxk9MxUdFRVFOhbbwBpTRxb/6ht3ZxcAABUSChUiGhVnWRfpzBokHBVOQhY3LhWymxm4oRkWDRVzYxeEcxd+bRcaEhULABWplBjUuhqJeBe+phn/7BuZhhhgUhZtXhcpIBVVb8UJAAABLklEQVR4AbXSV2KEIBAAUAdYHXsfa+zdbO5/vPC3tt8dKzw6KN8PYBzkB56Mi5eqcY4K3hhQN0zLdlTX84OLghI6ESoxJV6aZHgxP+eRQxR6aZGo/GSstBiqP0FVx27aCDhi1AYs6tJ+GMdhoAmPBqaOvKJUAlE5l+yIvASwqCg8WwgLccnhUDHQedQ3RUE5R8bCl4YHdNYtIE+imJcZ16Dc2QfFb7c4pSfnsM35nCtbVX+UBd36zkdZNeAAwLCd4dBuJVbhpkO7CUVoU792x3bDTcuLlEztPb1qK1L6w4CZE9ZxU9CsxbVpORW8j4vERCXnmexbXlWrFQX2eZGiXioFGyLKeWlwOQYZpQX1q1kZZPLbbld/NJKMULuaDAbztO91jvB4woBxziR9N/4BL1MY48JVNNAAAAAASUVORK5CYII=',
  'Paypal': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAApVBMVEX////h5vC2wdm4w9rI0ePo7fUqRZAAB3oAEnxCWZv19/oAI4MALYUAL4YAJoMAAHnb4OwAK4Q4UJYAFHwAMIeSn8IAHoAAKXsBJHENLoFfcagBIGkAKXJvvegOOo0AGWQBVpcAl92j1fEBAFsDjtEAmd1Vs+UBEGAAn+EBB1wES40AnN4AHm0DOX0EfL2t2vIEYqUHVKHn9vwGbLPT6/h7irYnpOHqpTq5AAAA30lEQVR4Ab3QRQKDQBBE0YlbD3FX3F3uf7Q07svkL3lIMeTHDYZpo/GkjdPZPG02W4wbtlwBzWPWDd3Madl2V8fhviA4wLb+3eMJL58vaefrsoY3htLD5Z71eNbwtcUnc3t/WK6KM1pBXhCl6tg12jkz+aPUcDTHT2aoaoouPhtjD4aMvU1L0XXWbozdOpZlCaKCpivLCu62FEDBYmk8uDwAhVcCoiiyNSObE9Ctm6AkPTmPVBvhyTI+Yv3n87EAq2Rl0MbwtN2uBB3z2ricYApaRLrzWNwp9eETC8gf+gLSxB5s5mkQCwAAAABJRU5ErkJggg==",
  'Disney': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAilBMVEUALqcAIqQAGaMAFaIAEqGAjMjCyubY3O7o6/bJzueHk8wAHKMAH6QAAJ8AKKVNYLevt9v///+psdkAJqWTntDe4vFTZLhIW7WkrNc5ULGeptRZa7wtSK8AK6YAKqZrecFyf8MTNqp+isgLMqhBV7S5weEAAJggP6z2+PwnQq00S7Dy9fscO6uNmM0k+YtYAAAA7klEQVR4Ae3QRaLCMBAA0EmJCzSGTH8Vl97/eN/dVix5y2Qcbq6HFBNakH/+GRdSaWMAwDo6/RmgKaWz0ociFsnn+S8RANOFmSz9aiaxYr82o3xO3cLfeaWdITXE2hYWmvr1uzGtVGXnOklWPZZDT9UaOcbNOj7/16stZky53HmNftlB1mIvcbNtD8k+B+zZTlSuXVg/hJQVZsGTTEfuV1sDT6an7WGw/eBTt0V1LvPJ4+G88Fnu69chnMhZqopeNqat6IYYoo8rj/37yvXFUlpEqBuIEZrn86JyNbyr4buJYAT+Q8ZTDf9HfP6/eQCzsBGRrkrc3gAAAABJRU5ErkJggg==",
  'Intercom': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAbCAMAAABY1h8eAAAAPFBMVEVHcEwIHTQIHTQIHTQIHTQIHTQIHTQIHTQIHTQHHTQIHTQIHTQIHTQIHTQIHTQIHTQIHTQKGjgIHTQIHTQ7j2SNAAAAFHRSTlMAQ8j/9bYuHYvcwKaa5BVhYwldcspbm8oAAACnSURBVHgB3ZLVAQRBCENhAoyu91/r2boWcO8XJyFihytEjYhxh3hS3BIoYkNyAAQTeQkWrlDVBqi5XbASoKH0DQoCFaCq5mCsA9DugmwyBR01x6B1fxiUXo/BMOx+u3/f4fGZqzGY+PB4TGjCiMj6eI7YoWZzUJi6Xqs5UmUmWheSYkS+H0IpoeWaiHW7kGhjNNLZ4OSwLSSmXEp2FWbyo/seffvo+Dd9gw84TQehxgAAAABJRU5ErkJggg==",
  'Evernote': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEI0lEQVR4AbWWA7AjXRCFT2xnbW+c37Zt27Zt27Zt2+batu1kv62dejVvVg+Trvqi6dw+3bcv1CDzOKTN4y7tkQ7p6dz5eq0wUq8W5sFUPn+mZ3O7asOIUzWzPdMBvZzfjmA7EbQ/VE1U9GbxF13YKa+42wVSFGyzlMevm7qdqjeKbxHsKJgMVQtL9EL+Ez2auUaPZY7SPb221Q7J3lStpbaIexlDTbOkx6PLu5yg1wvjCfIDHG4VYIYKVWAejIP/+N9n8JBu6n6U9kq3pzKSo+GZ+3R552PJfKwR4HurgIbCGHOZws91e49tFXU5GpK5m8yPRv1IMUBzBRjVqSLiR/qp57oy95L5kag2gtskABhzEf10rtJex5oy95L5kabMzXwBh8AUqDZdROF5GjMkqyntEZlnUHkfjm/B2/COwWtwDJwN85sjgOS+ZXW0VT1zwA5JD+q2wel0OBVOE59N36+CvlBtpoC+xMoR02Qxt4O1uyuN0g+nOTB3NSxudnAgxhhibUVMk4C428smcj8PcaotxJhOrL0Vry/Ax4+P2i6A8cD623xiHWMV4OLHq3i4zKbgFRihJzIvwIomnmoSsIRYZ1sFiD38MB7OsUnAIsa6Sqe2bwlpPt9U10Ns1wi4jJim09PrkI5oswkdOtwmAcvgP3gZ7oH3TQKqCLheVF31bNN4OwR8V+smNATcggDLmb1RzKsX8/ca81drAbetKsDjEJeK3bhcNGarnQcT7BGAab1IXM/lnsOpYVV4ufAr/jfhP6uRAm5evQC/U7qkc0FcJHBcuraBjOV0g7ZOtNFDva/T69wbEA4NEXCNtQnNx7F0WeccmT2DkGlrOdX66sg2G4ldXMVwSPf12kmP0VzP5N5lGvvgs2ANApYh4GIEOLRGCzhXTsfDvffndHyeP/0LE2AmzCDb/jw7Vt2DqDUsTEJRsipFwrqgU3ca+iLj9mwVsAgBpyJA67aeQWnLeFhcMDlAdiDD/WAfsl1fpbCvrnnbeJ06sV1PndXhQJ3dYR9tEE1o45iXy8fJJDDDImCOHs8eYghouJGdFAfrtXvDqE9PZo6gKn9R+rl6qzgFgYcp6JL2SKf0Uv4ji4Cx9NnW4nnzjUF0aeed6JWhRoCFCPhH9IMQybR49EjmbnNj4vunNot3ly3GKUo5HzICzNLz+avZS3rSBx45JJUjAZryKZOACs37BFeyoGyxnZJRvWCUmIuGHs9spZbeuilDzBZMyyDTpXQ6fbG/0l7ZY+18QT2RfcHIcDHvr7KEt9X2yRJNezjifjRt7UvZuJ7jWp6QXUaWTt3b6yjmdXpdECoBA8Hc/RV64xv2jbI8DtlnDihGYnqo11UEHL+Gg2wKlXiJ6SixbzhUE9sgEtGzucMQ8bEICAtgPHxIdY7V0W1brSnz5d7UKzU0jevWAAAAAElFTkSuQmCC",
  'Google': "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC",
  "Microsoft": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAABnRSTlMAAAAAAABupgeRAAAAWklEQVR4AWP4FKBEJPrip8wABrV7GOp3EYtGhgWjFoxaMGrBqAXf/OSIRD995CEWVO9hqN1FLBoOYNlnotF3iI7/O4lHQOVL3hONPo9agB2NWjBqwagFoxYAAB2zMZ7bQW2tAAAAAElFTkSuQmCC",
  "lnvision": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAMFBMVEX/M2b/M2b/M2b/KmH/IF3/cJH/tsb/V3//////6/D/8/b/Q3H/4en/h6L/yNX/n7R9+JkmAAAAAnRSTlMT0eaobugAAADPSURBVHgBY2BUQgICDELIXEUGJRSAjWtihMINK0bmmndMQuaqdqxGUZxzGYmr7OLi5OKsbGQE4Zq+exf+7tnWN9kQrl9HR31Hz42OPiMwVz+rUzez83xGRzGYq7Kjz1mzq8SvIxhi1I1+54g2Jz+YbEaryY9eI81OqL0nJqm8WK4MVADmmnc8sZ5xSAWoAGJvxxe3jhSVF90xUO7bVx2XVV70zjMCcbVndOR1FCvf6FgNsag+1fQu0F/5myEmqxgrGwNFndHCiiAXLdjRIgUAx1ZhMOEPMsYAAAAASUVORK5CYII="

};
// member image
const MemberImages = [
  "https://lh3.googleusercontent.com/ogw/AF2bZyhOlUMj3jejdy6RL5dQZLCmQ48XdPmgkQ7fz-EqmA=s32-c-mo",
  'https://lh3.googleusercontent.com/-vj_7gvIWiCM/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklQzq8PJy4Dw6wzyniT2X3_i01dTA/photo.jpg?sz=46',
  "https://lh3.googleusercontent.com/-ZwyxVkBP2jY/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfkmvNhuJVy0a-db9we2lGEgXcpvUsQ/photo.jpg?sz=46",
  "https://lh3.googleusercontent.com/-bD3NEWAulxE/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfknJ0pjzGpb9Xn2p-g7wXBaT-LEFww/photo.jpg?sz=46",


];





// Function to create table rows
function createTableRows() {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = ''; // Clear existing rows
  
  tableData.forEach(data => {
    const row = document.createElement('tr');
    row.setAttribute('data-brand', data.brand.toLowerCase());
   
    // Create the cell for the checkbox
    const checkboxCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkboxCell.appendChild(checkbox);
    row.appendChild(checkboxCell);
    checkbox.addEventListener('click', updateSelectedCount);
    //end checkbox

    // Create the cell for the brand
    const brandCell = document.createElement('td');
    // Retrieve the image URL based on the brand name
    const imageUrl = brandImages[data.brand];
    if (imageUrl) {
      // If the image URL exists, create the img element
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = `${data.brand} Logo`;
      img.classList.add('brand-image')
      // Append the img element to the brandCell
      brandCell.appendChild(img);
    }
    // Append the brand name to the brandCell
    brandCell.appendChild(document.createTextNode(data.brand));
    row.appendChild(brandCell);

   
    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = data.description;
    row.appendChild(descriptionCell);

    const membersCell = document.createElement('td');
    // Get the number of members
    const memberCount = parseInt(data.members) || 0; // Handle non-numeric values

    // Create member images container
    const memberImagesContainer = document.createElement('div');
    memberImagesContainer.classList.add('member-images');

    // Display images based on member count
    for (let i = 0; i < Math.min(memberCount, 4); i++) {
      const img = document.createElement('img');
      img.src = MemberImages[i % MemberImages.length]; // Use modulo to handle index overflow
      img.alt = `Member ${i + 1}`;
      img.style.width = '20px';
      img.style.height = '20px';
      img.style.borderRadius = '50%';

      memberImagesContainer.appendChild(img);
      memberImagesContainer.appendChild(img);
    }

    // Display a "+" sign if member count exceeds 4
    if (memberCount > 4) {
      const plusSign = document.createElement('span');
      plusSign.textContent = '+';
      plusSign.classList.add('member-count-overflow');
      // Set "+" sign size and shape
      plusSign.style.width = '20px';
      plusSign.style.height = '20px';
      plusSign.style.borderRadius = '50%';
      plusSign.style.lineHeight = '20px'; // Center the text vertically
      plusSign.style.textAlign = 'center'; // Center the text horizontally
      memberImagesContainer.appendChild(plusSign);
    }

    membersCell.appendChild(memberImagesContainer);
    row.appendChild(membersCell);
// End Member cell
    const categoriesCell = document.createElement('td');
    categoriesCell.textContent = data.categories;
    categoriesCell.style.display='flex';
    categoriesCell.style.justifyContent='center';
    // set text color
    if (data.categories.startsWith('Automation')) {
      categoriesCell.style.color = 'rgb(134,239,172)';
      categoriesCell.style.borderRadius = '15%';
      categoriesCell.style.display = 'flex';
      categoriesCell.style.justifyContent = 'center';
      categoriesCell.style.alignItems = 'center';
    } else if (data.categories.startsWith('Technology')) {
      categoriesCell.style.color = 'rgb(103,232,249)';
      categoriesCell.style.borderRadius = '15%';
      categoriesCell.style.display = 'flex';
      categoriesCell.style.justifyContent = 'center';
    } else if (data.categories.startsWith('B2B')) {
      categoriesCell.style.color = 'rgb(251,113,133)';
      categoriesCell.style.borderRadius = '15%';
      categoriesCell.style.display = 'flex';
      categoriesCell.style.justifyContent = 'center';
    }
     else if (data.categories.startsWith('Search')) {
      categoriesCell.style.color = 'rgb(253,230,138)';
      categoriesCell.style.borderRadius = '15%';
      categoriesCell.style.display = 'flex';
      categoriesCell.style.justifyContent = 'center';
    }
    else{
      categoriesCell.style.display = 'flex';
      categoriesCell.style.justifyContent = 'center';
    }
    row.appendChild(categoriesCell);
     // End category 
     // Start categoryCell
    const tagsCell = document.createElement('td');
    tagsCell.textContent = data.tags;
    row.appendChild(tagsCell);
  // meeting time cell Start
    const nextMeetingCell = document.createElement('td');
    nextMeetingCell.textContent = data.nextMeeting;
    if (data.nextMeeting.startsWith('In')) {
      nextMeetingCell.style.backgroundColor = 'rgb(134,239,172)';
      nextMeetingCell.style.borderRadius = '15%';
      nextMeetingCell.style.display = 'flex';
      nextMeetingCell.style.justifyContent = 'center';
    } else if (data.nextMeeting.startsWith('Tomorrow')) {
      nextMeetingCell.style.backgroundColor = 'rgb(103,232,249)';
      nextMeetingCell.style.borderRadius = '15%';
      nextMeetingCell.style.display = 'flex';
      nextMeetingCell.style.justifyContent = 'center';
    } else if (data.nextMeeting.startsWith('Not connect')) {
      nextMeetingCell.style.backgroundColor = 'rgb(251,113,133)';
      nextMeetingCell.style.borderRadius = '15%';
      nextMeetingCell.style.display = 'flex';
      nextMeetingCell.style.justifyContent = 'center';
    }
    else{
      nextMeetingCell.style.display = 'flex';
      nextMeetingCell.style.justifyContent = 'center';
    }

    row.appendChild(nextMeetingCell);

    // Append the row to the table body
    tbody.appendChild(row);
  });
}

// Filter button Start
const filterButton = document.getElementById('filterButton');
filterButton.addEventListener('click', () => {
  // Get the value of the filter input 
  const filterValue = prompt('Enter brand name to filter:');

  // Loop through all table rows
  tableData.forEach(data => {
      const brandName = data.brand.toLowerCase(); // Convert brand name to lowercase for case-insensitive comparison

      // Get the table row associated with this brand name
      const row = document.querySelector(`[data-brand="${brandName}"]`);

      if (row) {
          // If the filter value matches the brand name, show the row, otherwise hide it
          if (brandName.includes(filterValue.toLowerCase())) {
              row.style.display = ''; // Show the row
          } else {
              row.style.display = 'none'; // Hide the row
          }
      }
  });
});





window.onload = createTableRows;
function updateSelectedCount() {
  const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const selectedCount = checkedBoxes.length;
  const selectedText = document.querySelector('.fixed-footer li:nth-child(1)'); 

  const countSpan = document.createElement('span');
  countSpan.classList.add('selected-count'); // Apply the new class
  countSpan.textContent = selectedCount;

  selectedText.textContent = ` Selected `;
  selectedText.appendChild(countSpan);
}

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", function () {
      const dropdown = toggle.parentNode;
      dropdown.classList.toggle("active");
      const dropdownIcon = toggle.querySelector(".dropdown-icon");
      dropdownIcon.textContent = dropdown.classList.contains("active") ? "-" : "+";
    });
  });
});
const tags = document.querySelectorAll(".tag");


tags.forEach(tag => {
  tag.addEventListener("click", () => {
    tags.forEach(t => t.classList.remove("active"));
    tag.classList.add("active");
  });
});

filterButton.addEventListener("click", () => {
  
  console.log("selected tag");
});



