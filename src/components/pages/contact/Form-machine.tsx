import { Reducer } from "react";

enum FormState {
  Initial,
  Submitting,
  Submitted,
  Failed,
}

enum FormEvent {
  Submit,
  Success,
  Fail,
  Restart,
}

const formMachineReducer: Reducer<FormState, FormEvent> = (state, event) => {
  // Handle possible state transitions based on received event and state
  switch (state) {
    case FormState.Initial:
      if (event === FormEvent.Submit) {
        return FormState.Submitting;
      }
      break;
    case FormState.Submitting:
      if (event === FormEvent.Success) {
        return FormState.Submitted;
      }
      if (event === FormEvent.Fail) {
        return FormState.Failed;
      }
      break;
    case FormState.Submitted:
      if (event === FormEvent.Restart) {
        return FormState.Initial;
      }
      break;
    case FormState.Failed:
      if (event === FormEvent.Restart) {
        return FormState.Initial;
      }
      break;
  }

  // No match, return same state
  return state;
};

export { formMachineReducer, FormState, FormEvent };
