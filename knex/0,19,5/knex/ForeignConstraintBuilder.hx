package knex;

typedef ForeignConstraintBuilder = {
	function references(columnName:String):ReferencingColumnBuilder;
};