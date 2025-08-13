TypeScript
interface IDataPoint {
  id: number;
  features: number[];
  label: string;
}

interface IModel {
  id: string;
  name: string;
  description: string;
  type: 'classification' | 'regression';
  data: IDataPoint[];
  hyperparameters: {
    learningRate: number;
    batchSize: number;
    iterations: number;
  };
  metrics: {
    accuracy: number;
    precision: number;
    recall: number;
    f1Score: number;
  };
}

interface IDashboardState {
  models: IModel[];
  selectedModel: IModel | null;
  dataPoints: IDataPoint[];
  newDataPoint: Partial<IDataPoint>;
  isTraining: boolean;
  trainingProgress: number;
}

interface IAction {
  type: 'ADD_MODEL' | 'SELECT_MODEL' | 'ADD_DATA_POINT' | 'TRAIN_MODEL' | 'UPDATE_TRAINING_PROGRESS';
  payload: any;
}

interface IDashboardProps {
  initialState: IDashboardState;
  dispatch: (action: IAction) => void;
}