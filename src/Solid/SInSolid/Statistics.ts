class Statistics {
  computeStatistics() {}

  /**
   * the method generateReport violates the single responsibility principle,
   * generateReport should be in it's own class
   */
  generateReport() {}
}
/**
 * spearating the concerns of generating report from statictics
 */
class ReportGenerator {
  generateReport() {}
}
