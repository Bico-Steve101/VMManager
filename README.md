# VMManagement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# VM Management System

## Table of Contents
1. [System Overview](#system-overview)
2. [Page Descriptions](#page-descriptions)
3. [User Roles](#user-roles)
4. [VM Plans](#vm-plans)
5. [Guest Page Details](#guest-page-details)
6. [Filter Section Layout](#filter-section-layout)
7. [Payment and VM Statuses](#payment-and-vm-statuses)

## System Overview

This VM Management System is a comprehensive platform for managing virtual machines, user accounts, and subscriptions. It provides role-based access control, allowing administrators, standard users, and guests to interact with the system based on their permissions.

## Page Descriptions

| Page | Role | Functionality Summary |
|------|------|------------------------|
| Login/SSO Page | All | User login via SSO, register new users. |
| Dashboard Page | Admin, User, Guest | Overview of system status, user-specific VM controls, and billing details. |
| User Management Page | Admin | Manage users, assign roles, move VMs, and view activity logs. |
| VM Management Page | Admin, User | Create, delete, and manage VMs (for Admin and Standard Users). |
| VM Backup & Snapshot Page | Admin, User | Manage VM backups and snapshots, restore from backups. |
| Billing & Payments Page | Admin, User | View and manage payments, track billing history, upgrade subscriptions. |
| Subscription Management Page | Admin, User | Manage subscription plans and user upgrades/downgrades. |
| Audit Logs & Notifications Page | Admin | View and track audit logs of actions performed on the system. |
| Admin Panel | Admin | Centralized control of the platform's administrative features. |
| Rate Plan & Service Overview Page | Guest, User | View available services and rate plans, prompt users to sign up or upgrade subscriptions. |
| Profile & Settings Page | All | Manage personal profile, password, and SSO settings. |

## User Roles

1. **Admin**
   - Full control over the system
   - Manage users, VMs, subscriptions, and system settings
   - Access to all pages and functionalities

2. **Standard User**
   - Manage personal VMs and account settings
   - Limited access to system-wide settings

3. **Guest**
   - View available services and plans
   - Limited access to system features
   - Prompted to sign up or upgrade for additional functionality

## VM Plans

| VM Name | Price | Category | vCPUs | RAM | Storage | Backup | Snapshots | Scaling |
|---------|-------|----------|-------|-----|---------|--------|-----------|---------|
| CloudLite | $10/month | Development | 2 vCPUs | 4 GB RAM | 50 GB SSD | Yes | No | No |
| DevBox | $15/month | Development | 2 vCPUs | 8 GB RAM | 100 GB SSD | Yes | Yes | No |
| ProCompute | $30/month | High Performance | 4 vCPUs | 16 GB RAM | 200 GB SSD | Yes | Yes | Yes |
| CorePlus | $25/month | Standard | 4 vCPUs | 8 GB RAM | 150 GB SSD | Yes | Yes | No |
| UltraCompute | $50/month | High Performance | 8 vCPUs | 32 GB RAM | 500 GB SSD | Yes | Yes | Yes |
| BasicServer | $8/month | Entry-Level | 1 vCPU | 2 GB RAM | 30 GB SSD | No | No | No |
| EnterpriseX | $100/month | Enterprise | 16 vCPUs | 64 GB RAM | 1 TB SSD | Yes | Yes | Yes |
| StarterCloud | $5/month | Development | 1 vCPU | 2 GB RAM | 20 GB SSD | No | No | No |
| ComputeMax | $75/month | High Performance | 12 vCPUs | 48 GB RAM | 750 GB SSD | Yes | Yes | Yes |
| BackupMaster | $40/month | Backup-Centric | 4 vCPUs | 8 GB RAM | 1 TB HDD | Yes | Yes | No |

## Guest Page Details

### Header/Intro Section
- Title: "Explore Our Virtual Machines"
- Description: Brief explanation of platform benefits
- Call to Action: "Sign Up to Start Managing VMs" or "Upgrade for Full Access"

### Virtual Machines Available (VM Catalog)
Display details for each VM:
- Name
- Price
- Category
- vCPUs
- RAM
- Storage
- Additional Information (backup support, snapshots, automated scaling)

### Feature Highlights
Highlight specific features for each VM plan.

### Call to Action
- Message: "Ready to take control of your virtual infrastructure?"
- Button: "Sign Up Now" or "Upgrade for More Features"

### Footer/Additional Info
Information about subscription plans (Platinum, Gold, Silver, Bronze) and tier features.

## VM Plan Summary

| Plan Name | Features | Price | Best For |
|-----------|----------|-------|----------|
| CloudLite | 2 vCPUs, 4 GB RAM, 50 GB SSD, Basic Backup | $10/month | Developers |
| DevBox | 2 vCPUs, 8 GB RAM, 100 GB SSD, Backup, Snapshots | $15/month | Power Users |
| ProCompute | 4 vCPUs, 16 GB RAM, 200 GB SSD, Full Backup | $30/month | Small to Medium Businesses |
| CorePlus | 4 vCPUs, 8 GB RAM, 150 GB SSD, Basic Backup | $25/month | General Use |
| UltraCompute | 8 vCPUs, 32 GB RAM, 500 GB SSD, Full Backup, Scaling | $50/month | High Performance Applications |
| BasicServer | 1 vCPU, 2 GB RAM, 30 GB SSD | $8/month | Basic Web Hosting |
| EnterpriseX | 16 vCPUs, 64 GB RAM, 1 TB SSD, Full Backup, Snapshots | $100/month | Large Enterprises |
| StarterCloud | 1 vCPU, 2 GB RAM, 20 GB SSD | $5/month | Lightweight Development |
| ComputeMax | 12 vCPUs, 48 GB RAM, 750 GB SSD, Full Backup, Scaling | $75/month | Resource-Intensive Workloads |
| BackupMaster | 4 vCPUs, 8 GB RAM, 1 TB HDD, Backup-Focused | $40/month | Backup and Storage Solutions |

## Filter Section Layout

1. **Top Section**
   - Title: Price Range
   - Description: Select the price range for the VMs

2. **Section 1: VM Types**
   - Title: VM Types
   - Checkboxes:
     - Development
     - High Performance
     - Standard
     - Backup-Centric

3. **Section 2: Storage Type**
   - Title: Storage Type
   - Checkboxes:
     - SSD
     - HDD
     - NVMe
     - Hybrid
     - Cloud Storage
     - Local Storage

4. **Section 3: Backup Options**
   - Title: Backup Options
   - Checkboxes:
     - Daily
     - Weekly
     - Monthly
     - Manual

5. **Tags Section**
   - Title: Tags
   - Subsections:
     - Performance Level
       - High Speed
       - Medium Speed
       - Low Speed
       - Ultra Fast
       - Balanced
       - Economy
     - Data Center Location
       - North America
       - Europe
       - Asia
       - South America
       - Australia
       - Africa
     - Operating System
       - Windows
       - Linux
       - Ubuntu
       - CentOS
       - Debian
       - Fedora
     - Security Features
       - Encryption
       - Firewall
       - VPN
       - Anti-Malware
       - DDoS Protection
       - Two-Factor Authentication
     - Support Level
       - 24/7 Support
       - Business Hours
       - Email Support
       - Phone Support
       - Priority Support
       - Community Support

## Payment and VM Statuses

### Payment Statuses:
- Pending – The payment is yet to be processed.
- Completed – The payment has been successfully processed.
- Failed – The payment attempt was unsuccessful.
- Refunded – The payment has been returned to the payer.
- Cancelled – The payment has been voided before processing.

### VM (Virtual Machine) Statuses:
- Running – The virtual machine is currently operational and executing.
- Stopped – The virtual machine has been halted and is not running.
- Suspended – The virtual machine is paused and can be resumed later.
