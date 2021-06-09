package lodash;

typedef RightCurriedFunction3<T1, T2, T3, R> = ts.AnyOf8<() -> RightCurriedFunction3<T1, T2, T3, R>, (t3:T3) -> RightCurriedFunction2<T1, T2, R>, (t2:T2, t3:LoDashStatic) -> RightCurriedFunction2<T1, T3, R>, (t2:T2, t3:T3) -> RightCurriedFunction1<T1, R>, (t1:T1, t2:LoDashStatic, t3:LoDashStatic) -> RightCurriedFunction2<T2, T3, R>, (t1:T1, t2:T2, t3:LoDashStatic) -> RightCurriedFunction1<T3, R>, (t1:T1, t2:LoDashStatic, t3:T3) -> RightCurriedFunction1<T2, R>, (t1:T1, t2:T2, t3:T3) -> R>;