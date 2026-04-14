const { questions } = require('../../data/questions.js');
const { calculateResult } = require('../../utils/calculateResult.js');

Page({
  data: {
    questions: questions,
    currentQuestionIndex: 0,
    answers: []
  },

  handleOptionSelect(e) {
    const optionIndex = e.currentTarget.dataset.index;
    const newAnswers = [...this.data.answers, optionIndex];
    
    if (this.data.currentQuestionIndex < this.data.questions.length - 1) {
      this.setData({
        answers: newAnswers,
        currentQuestionIndex: this.data.currentQuestionIndex + 1
      });
    } else {
      // Test finished
      wx.showLoading({ title: '星轨推演中...' });
      const resultData = calculateResult(newAnswers);
      getApp().globalData.testResult = resultData;
      
      setTimeout(() => {
        wx.hideLoading();
        wx.redirectTo({
          url: '/pages/result/result'
        });
      }, 1000);
    }
  }
});
