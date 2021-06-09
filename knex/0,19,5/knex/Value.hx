package knex;

typedef Value = ts.AnyOf10<String, Float, Bool, global.Buffer, js.lib.Date, Array<String>, Array<Float>, Array<js.lib.Date>, Array<Bool>, Raw<Dynamic>>;