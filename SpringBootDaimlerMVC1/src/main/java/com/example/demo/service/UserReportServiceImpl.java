package com.example.demo.service;

import com.example.demo.model.Reports;
import com.example.demo.repository.ReportsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserReportServiceImpl implements UserReportService {

    @Autowired
    private ReportsRepository reportsRepository;

    @Override
    public List<Reports> getReports(Long userId) {
        // Fetch only the reports for the specific user (optimized query)
        return reportsRepository.findByUserId(userId);  // New method in the repository
    }

    @Override
    public List<Reports> createReport(Reports reports) {
        reportsRepository.save(reports);  // No need to set reportId manually
        return reportsRepository.findAll();  // Return all reports (you could return just the new one if needed)
    }

    @Override
    public List<Reports> removeUserReport(Long reportId) {
        reportsRepository.deleteById(reportId);
        return reportsRepository.findAll();  // Return all remaining reports
    }

    @Override
    public List<Reports> getAllReports() {
        return reportsRepository.findAll();
    }
}
