"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var validateMachine = [
    (0, express_validator_1.body)('name')
        .notEmpty()
        .withMessage('Name is required.')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long.'),
    (0, express_validator_1.body)('category')
        .notEmpty()
        .withMessage('Category is required.')
        .isIn(['Web', 'Network', 'Database', 'Other'])
        .withMessage('Invalid category selected.'),
    (0, express_validator_1.body)('amiId')
        .notEmpty()
        .withMessage('AMI ID is required.')
        .matches(/^ami-[0-9a-fA-F]{8,17}$/)
        .withMessage('Invalid AMI ID format.'),
    (0, express_validator_1.body)('exp')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Experience points must be a positive integer.'),
    (0, express_validator_1.body)('flag')
        .notEmpty()
        .withMessage('Flag is required.')
        .isString()
        .withMessage('Flag must be a string.')
        .isLength({ min: 5 })
        .withMessage('Flag must be at least 5 characters long.'),
    // Add more validations as needed
    function (req, res, next) {
        var errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        next();
    },
];
exports.default = validateMachine;
