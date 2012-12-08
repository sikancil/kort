CREATE INDEX answer_type_idx ON kort.answer (type ASC NULLS LAST);
CREATE INDEX error_type_id_idx ON kort.errors (error_type_id ASC NULLS LAST);
CREATE INDEX error_name_idx ON kort.error_type (type ASC NULLS LAST);
