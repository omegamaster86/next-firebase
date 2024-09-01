import { createContext } from "react";
import type { User } from "../types/user";

// コンテクスト用の型を定義
// 最終的な値が null だけだと、ログインしていないから空なのか、あるいはまだ状態を参照中（ローディング中）なのかの区別がつきません。
// 初期値を undefined とし、未ログインの場合に null を代入することで、 
// undefined であればローディング中のUIを表示し、 
// null なら「ログインしてください」というUIを表示する。といった切り分けが可能になります。

type UserContextType = User | null | undefined;

// コンテクストを作成
const AuthContext = createContext<UserContextType>(undefined);