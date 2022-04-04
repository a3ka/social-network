import {addPost, state} from "./redux/state";
import {rerenderEntireTree} from "./render";

rerenderEntireTree(state);