import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QComboBox
from PyQt5.QtCore import Qt

class MainWindow(QMainWindow):
    
    def __init__(self):
        
        super().__init__()
        self.setWindowTitle("AniMatch")
        self.setFixedSize(300,100)

        #create a combo box for selecting an action
        self.combo_box = QComboBox(self)
        self.combo_box.addItems(['Preprocess Data', 'Train RNN Model', 'Train Decision Tree Model', 'Make Recommendations'])
        self.combo_box.move(50, 25)
        self.combo_box.activated[str].connect(self.onActivated)
        self.show()
    
    def onActivated(self, text):

        #handle the selection action:
        if text == 'Preprocess Data':
            preprocessData()
        elif text == 'Train RNN Model':
            trainRNN()
        elif text == 'Train Decision Tree Model':
            trainDecisionTree()
        elif text == 'Make Recommendations':
            recommendAnime()


