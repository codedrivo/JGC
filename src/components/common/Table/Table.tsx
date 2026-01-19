import React from "react";
import "./Table.css";

interface Column {
    key: string;
    header: string;
    render?: (row: any) => React.ReactNode;
    width?: string;
    align?: "left" | "center" | "right";
}

interface TableProps {
    columns: Column[];
    data: any[];
    onRowClick?: (row: any) => void;
    className?: string;
}

const Table: React.FC<TableProps> = ({ columns, data, onRowClick, className = "" }) => {
    return (
        <div className={`custom-table-container ${className}`}>
            <table className="custom-table">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className={`table-header-${col.align || 'left'}`}
                                style={{ width: col.width }}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={onRowClick ? "clickable-row" : ""}
                            onClick={() => onRowClick && onRowClick(row)}
                        >
                            {columns.map((col) => (
                                <td
                                    key={`${rowIndex}-${col.key}`}
                                    className={`table-cell-${col.align || 'left'}`}
                                >
                                    {col.render ? col.render(row) : row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
