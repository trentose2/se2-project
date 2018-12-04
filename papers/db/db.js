papers = require('../../persistence/papers.json')

const insert = function (newPaper) {
  let paper_ids = papers.map(papers => papers.id)

  let maxId = 0
  if (paper_ids.length) {
    maxId = Math.max(...paper_ids)
  }

  newPaper.id = maxId + 1
  papers.push(newPaper)
}

const selectPapersByUserId = function (userId) {
  let result = new Array;
  if (userId.isNaN) {
    return null;
  } else {
    for (var i = 0; i < papers.length; i++) {
      if (papers[i].user == userId) {
        result.push(papers[i])
      }
    }
    return result;
  }
}

const selectById = function (id) {
  let result = null;
  papers.forEach(paper => {
    if (paper.id == id) {
      result = paper;
    }
  })
  return result;
}

module.exports = { insert, selectPapersByUserId, selectById}