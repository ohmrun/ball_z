package global._;

typedef MemoVoidDictionaryIterator<T, K, TResult> = (acc:TResult, curr:T, key:K, dict:{ }) -> Void;