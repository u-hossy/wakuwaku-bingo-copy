// ビンゴの各番号を保存するところ
type BingoNumber = { name: number; order: number };

// ビンゴの景品を保存するところ
type Prize = { id: number; name: string; amount: number };

// プロジェクターの表示モードを保存するところ
type ProjectorMode = "latest" | "history";

// ゲームの開始状態を保存するところ
type IsStarted = boolean;

export type { BingoNumber, Prize, ProjectorMode, IsStarted };
