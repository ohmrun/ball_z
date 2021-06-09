package knex;

typedef MultikeyForeignConstraintBuilder = {
	function references(columnNames:Array<String>):ReferencingColumnBuilder;
};