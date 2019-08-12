
/**
 * DefaultAction type for Actions which
 * have only output type param
 */
export interface DefaultAction {
  type: string
};

/**
 * PayloadAction type for Actions which
 * have type and payload output params
 */
export interface PayloadAction {
  type: string
  payload: any
};

export type DispatchAction = DefaultAction | PayloadAction;
