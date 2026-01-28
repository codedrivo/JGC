"use client";

import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import "./FilterBar.css";
import downArrow from "../../../assets/down-arrow.png";

interface Option {
    label: string;
    value: string;
}

interface FilterBarProps {
    filterOptions: Option[];
    sortOptions: Option[];
    filterValue: string;
    sortValue: string;
    onFilterChange: (value: string) => void;
    onSortChange: (value: string) => void;
    onReset: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
    filterOptions,
    sortOptions,
    filterValue,
    sortValue,
    onFilterChange,
    onSortChange,
    onReset,
}) => {
    return (
        <div className="filter-bar">
            {/* Filter */}
            <FormControl size="small" className="filter-control">
                <Select
                    value={filterValue}
                    onChange={(e) => onFilterChange(e.target.value)}
                    displayEmpty
                    IconComponent={(props) => (
                        <img
                            src={downArrow}
                            alt="down"
                            {...props}
                            style={{ width: 16, height: 10, ...(props.style || {}) }}
                        />
                    )}
                >
                    <MenuItem value="">
                        <span className="filter-placeholder">FILTER BY: TYPE</span>
                    </MenuItem>

                    {filterOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Sort */}
            <FormControl size="small" className="filter-control">
                <Select
                    value={sortValue}
                    onChange={(e) => onSortChange(e.target.value)}
                    displayEmpty
                    IconComponent={(props) => (
                        <img
                            src={downArrow}
                            alt="down"
                            {...props}
                            style={{ width: 16, height: 10, ...(props.style || {}) }}
                        />
                    )}
                >
                    <MenuItem value="">
                        <span className="filter-placeholder">
                            SORT BY: DATE, NEW TO OLD
                        </span>
                    </MenuItem>

                    {sortOptions.map((opt) => (
                        <MenuItem key={opt.value} value={opt.value}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Reset */}
            <button className="filter-reset" onClick={onReset}>
                RESET
            </button>
        </div>
    );
};

export default FilterBar;
