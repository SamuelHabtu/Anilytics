import argparse



def parse_arguments():

    parser = argparse.ArgumentParser()
    parser.add_argument('--preprocess', action='store_true',
                        help='Preprocess the data.')
    parser.add_argument('--train-rnn', action='store_true',
                        help='Train the RNN model.')
    parser.add_argument('--train-decision-tree', action='store_true',
                        help='Train the decision tree model.')
    parser.add_argument('--recommend', action='store_true',
                        help='Make recommendations.')
    parser.add_argument('--gui', action='store_true',
                        help='Start the GUI.')
    return parser.parse_args()


if __name__ == '__main__':
    
    # Parse command line arguments
    args = parse_arguments()

    # Preprocess the data
    if args.preprocess:
        preprocess_data()

    # Train the RNN model
    if args.train_rnn:
        train_rnn()

    # Train the decision tree model
    if args.train_decision_tree:
        train_decision_tree()

    # Make recommendations
    if args.recommend:
        recommend_anime()

    # Start the GUI
    if args.gui:
        start_gui()
