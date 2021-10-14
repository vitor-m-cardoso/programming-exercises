SELECT job_id, AVG(salary) 
FROM hr.employees
GROUP BY job_id
ORDER BY "average_salary" DESC;
